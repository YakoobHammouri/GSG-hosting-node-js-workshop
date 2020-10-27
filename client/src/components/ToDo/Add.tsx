import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ArrowBack, DeleteSweep, Edit, Save } from '@material-ui/icons';
import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import inputControltType from '../../models/type/inputControltType';
import {
  default as TaskType,
  default as taskType,
} from '../../models/type/TaskType';
import LoaderProgress from '../LoaderProgress';
const InfoDialog = dynamic(() => import('../Dialog/infoDialog'), {
  ssr: false,
});
const useStyles = (theme: Theme) => ({
  root: { 'text-align': 'center' },

  right: { 'text-align': 'right' },
  content: {
    padding: '24px',
    width: '98%',
    // minWidth: 290,
    // maxWidth: 390,
  },
  fullWidth: { width: '100%' },

  imaegBox: {
    width: 365,
    height: 400,
    [theme.breakpoints.down('sm')]: { width: 250, height: 270 },
  },
});

class AddTask extends Component<any, any> {
  state = {
    data: {
      name: {
        value: '',
        message: '',
        isValid: true,
        isRequired: true,
        type: 'text',
        lable: 'name',
      },
    },
    isDone: false,
    gid: null,

    isLoading: true,
    displayBlock: false,
    dialogTitle: 'Successfully',
    dialogMessage: '',
    //'success' | 'info' | 'warning' | 'error'
    dialogType: 'success',
    dialogOpen: false,
  };

  handleClearValues = () => {
    //this.setState({ isLoading: true });
    this.clearDataField();
  };

  componentDidMount() {
    this.setState({ isLoading: false });

    const { editTaskData, isEdit } = this.props;
    if (isEdit && editTaskData) {
      this.setTaskData(editTaskData);
    }
  }

  componentWillUnmount() {
    this.clearDataField();
  }

  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };

  handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const form = { ...this.state.data };
    type formKey = keyof typeof form;
    const key: formKey = target.name as formKey;
    form[key].value = target.value;
    this.setState({ data: form });
  };

  handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ isDone: e.target.checked });
  };

  clearDataField() {
    const { data } = this.state;

    const fromInput: inputControltType = {};
    type formKey = keyof typeof data;
    for (const control of Object.keys(data)) {
      const key: formKey = control as formKey;

      let input = data[key];
      input.value = '';
      input.message = '';
      input.isValid = true;
      fromInput[control] = input;
    }

    this.setState({
      data: fromInput,
      isDone: false,
    });
  }

  handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    UpdateEditTask?: (taskData: TaskType) => void,
    isEdit?: boolean,
    closeDrawer?: (isopne: boolean) => void
  ) => {
    event.preventDefault();

    let formValid = true;
    const { data } = this.state;

    const fromInput: inputControltType = {};

    type formKey = keyof typeof data;
    for (const control of Object.keys(data)) {
      const key: formKey = control as formKey;

      const input = data[key];

      if (input.isRequired && input.type === 'text') {
        if (!input.value.trim()) {
          input.message = `please enter the ${input.lable}`;
          input.isValid = false;
          formValid = false;
        } else {
          input.message = '';
          input.isValid = true;
        }
      }

      fromInput[control] = input;
    }

    if (!formValid) {
      this.setState({ data: fromInput });
      // dialogTitle: 'Successfully',
      // dialogMessage: '',
      // //'success' | 'info' | 'warning' | 'error'
      // dialogType: 'success',
      // dialogOpen: false,
      // swal('خطا', 'الرجاء ادخال جميع البيانات المطلوبه', 'error');
      return;
    }

    this.setState({
      data: fromInput,
      isLoading: true,
      displayBlock: true,
    });

    const postData: inputControltType = {
      title: data.name.value,
      isDone: this.state.isDone,
    };

    if (isEdit) {
      postData.id = this.state.gid;
      console.log('Edit postData : ', postData);
    }

    if (UpdateEditTask) {
      UpdateEditTask(postData as TaskType);
    }

    this.clearDataField();
    this.setState({
      isLoading: false,
    });

    if (closeDrawer) {
      closeDrawer(false);
    }
  };

  setTaskData = (taskData: taskType) => {
    if (!taskData) return;
    const form = { ...this.state.data };
    form.name.value = taskData.title;

    this.setState({
      data: form,
      gid: taskData.id,
      isDone: taskData.isDone,
    });
  };

  render() {
    const { classes, UpdateEditTask, isEdit, closeDrawer } = this.props;

    const {
      isLoading,
      displayBlock,
      dialogTitle,
      dialogMessage,
      dialogType,
      dialogOpen,
      isDone,
    } = this.state;

    const { name } = this.state.data;

    const displayStatus = isLoading && !displayBlock ? 'none' : 'block';

    return (
      <Box mt={4} mb={4} component="div" width={1}>
        <LoaderProgress isLoading={isLoading} />
        <Box component="div" display={displayStatus} width={1}>
          <Grid container justify="center">
            <Paper elevation={0} className={classes.content}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textSecondary">
                  Add Task
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <form
                  onSubmit={(e) =>
                    this.handleSubmit(e, UpdateEditTask, isEdit, closeDrawer)
                  }
                  noValidate
                  autoComplete="off"
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        required
                        value={name.value}
                        error={!name.isValid}
                        autoFocus={true}
                        id="name"
                        name="name"
                        onChange={this.handleTextInput}
                        placeholder="Task Description"
                        fullWidth={true}
                        label="Task Description"
                        color="primary"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <FormControl error>
                        <FormHelperText style={{ width: 150, height: 35 }}>
                          {name.message}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={isDone}
                          onChange={this.handleCheckbox}
                          name="isDone"
                          color="primary"
                        />
                      }
                      label="is completed"
                    />
                  </Grid>

                  <Grid container style={{ marginTop: 56 }}>
                    <Grid
                      item
                      container
                      xs={isEdit ? 12 : 6}
                      justify={isEdit ? 'center' : 'flex-start'}
                    >
                      <Button
                        size={isEdit ? 'large' : 'medium'}
                        color="primary"
                        variant="contained"
                        type="submit"
                        endIcon={isEdit ? <Edit /> : <Save />}
                      >
                        {isEdit ? 'Update' : 'Save'}
                      </Button>
                    </Grid>
                    {isEdit ? (
                      ''
                    ) : (
                      <Grid item xs={6} container justify="flex-end">
                        <Button
                          size="medium"
                          color="primary"
                          variant="contained"
                          onClick={this.handleClearValues}
                          endIcon={<DeleteSweep />}
                        >
                          Reset
                        </Button>
                      </Grid>
                    )}

                    <Grid
                      container
                      item
                      xs={12}
                      justify="center"
                      style={{ marginTop: 32 }}
                    >
                      <Button
                        size="medium"
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          if (closeDrawer) {
                            closeDrawer(false);
                          }
                        }}
                        startIcon={<ArrowBack />}
                      >
                        Back
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Box>
        <InfoDialog
          title={dialogTitle}
          message={dialogMessage}
          type={dialogType}
          open={dialogOpen}
          handleClose={this.handleDialogClose}
        />
      </Box>
    );
  }
}
export default withStyles(useStyles)(AddTask);
