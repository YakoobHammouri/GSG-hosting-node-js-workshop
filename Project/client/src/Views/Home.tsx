import {
  Box,
  Button,
  Drawer,
  FilledInput,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  makeStyles,
  Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import API from '../api/RestApiCall';
import { Add, Lsit } from '../components/ToDo';
import TaskType from '../models/type/TaskType';

const LoaderProgress = dynamic(() => import('../components/LoaderProgress'), {
  ssr: false,
});

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '40%',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEdit, SetIsEdit] = React.useState(false);
  const [editTaskData, SetEditTaskData] = React.useState<TaskType | null>(null);

  const [allTask, setAllTask] = React.useState<Array<TaskType>>([]);
  const [searchTask, setSearchTask] = React.useState<Array<TaskType>>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    if (open === false) {
      SetIsEdit(false);
      SetEditTaskData(null);
    }
    setOpen(open);
  };
  // console.log('Tak in effeact : ', task);
  useEffect(() => {
    NProgress.start();

    API('GET', 'todos')
      .then((res) => {
        setAllTask(res.data as Array<TaskType>);
        NProgress.done();
      })
      .catch((err) => {
        console.log('Error in Get Data from Server : ', { ...err });
      });
  }, []);
  const handellLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //if (e.target.value.length > 1) {

    setSearchValue(e.target.value);
    const history = [...allTask];
    const serarch = history.filter((x) => x.title.includes(e.target.value));
    console.log(serarch);
    setSearchTask(serarch);
    //}
  };

  const handleDeleteTask = (e: any, id: number) => {
    if (!id) return;
    setIsLoading(true);

    API('DELETE', 'todos/' + id)
      .then((res) => {
        const task = [...allTask];
        task.splice(
          task.findIndex((x) => x.id === id),
          1
        );
        setAllTask(task);
      })
      .catch((err) => {
        console.log('Error in delete  Task : ', { ...err });
      });
  };

  const handleChnageCompleted = (
    e: React.ChangeEvent<HTMLInputElement>,
    taskData: TaskType
  ) => {
    const putTak = { ...taskData };
    putTak.isDone = e.target.checked;
    API('PUT', 'todos/' + taskData.id, putTak, 'application/json')
      .then((res) => {
        const task = [...allTask];
        task.splice(
          task.findIndex((x) => x.id === taskData.id),
          1,
          putTak
        );
        setAllTask(task);
      })
      .catch((err) => {
        console.log('Error in Put  Task : ', { ...err });
      });
  };

  const handleEditTask = (taskData: TaskType) => {
    SetEditTaskData(taskData);
    SetIsEdit(true);
    setOpen(true);
  };

  const UpdateEditTask = (taskData: TaskType) => {
    console.log('isEdit :', isEdit);

    API(
      isEdit ? 'PUT' : 'POST',
      isEdit ? 'todos/' + taskData.id : 'todos',
      taskData,
      'application/json'
    )
      .then((res) => {
        console.log('Res :', res);
        if (isEdit) {
          const task = [...allTask];
          task.splice(
            task.findIndex((x) => x.id === taskData.id),
            1,
            taskData
          );
          setAllTask(task);
          SetIsEdit(false);
        } else {
          setAllTask([taskData, ...allTask]);
        }
      })
      .catch((err) => {
        console.log('Error in Add  Task : ', { ...err });
      });
  };

  return (
    <>
      <LoaderProgress isLoading={isLoading} />
      <Grid
        container
        item
        justify="center"
        xs={12}
        spacing={2}
        style={{ marginTop: 24 }}
      >
        <Grid item xs={false} sm={2} />
        <Grid
          container
          xs={12}
          sm={8}
          justify="space-around"
          direction="row-reverse"
        >
          <Grid container item xs={12} sm={8} justify="center">
            <Grid item xs={12}>
              <FormControl
                fullWidth
                className={classes.margin}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-amount">
                  Search
                </InputLabel>
                <FilledInput
                  fullWidth={true}
                  endAdornment={
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={12}
            sm={2}
            // style={{ marginTop: 16 }}
            justify="center"
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<AddIcon />}
              onClick={toggleDrawer(true)}
            >
              Add
            </Button>
          </Grid>

          <Grid container item xs={12} justify="center">
            <Grid item xs={12} sm={10}>
              {searchValue && searchTask.length === 0 ? (
                <Box>
                  <Typography variant="h5" align="center">
                    There are no similar results for your search
                  </Typography>
                </Box>
              ) : searchTask.length > 0 ? (
                searchTask.map((item, index) => {
                  return (
                    <Lsit
                      key={index}
                      taskData={item}
                      deleteTask={handleDeleteTask}
                      editTask={handleEditTask}
                      chnageCompleted={handleChnageCompleted}
                    />
                  );
                })
              ) : (
                allTask.map((item, index) => {
                  if (allTask.length === index + 1 && isLoading === true) {
                    setIsLoading(false);
                    NProgress.done();
                  }

                  return (
                    <Lsit
                      key={index}
                      taskData={item}
                      deleteTask={handleDeleteTask}
                      editTask={handleEditTask}
                      chnageCompleted={handleChnageCompleted}
                    />
                  );
                })
              )}
            </Grid>
            {/* <Grid item xs={false} sm={2} /> */}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

      <Drawer
        classes={{ paper: classes.root }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {
          <div style={{ width: 300 }}>
            <Add
              UpdateEditTask={UpdateEditTask}
              editTaskData={editTaskData}
              isEdit={isEdit}
              closeDrawer={toggleDrawer(false)}
            />
          </div>
        }
      </Drawer>
    </>
  );
}

//AddNewTask={(newTask: TaskType) => {
//   setAllTask([newTask, ...allTask]);
// }}
// updateAllTask={() => {}}
