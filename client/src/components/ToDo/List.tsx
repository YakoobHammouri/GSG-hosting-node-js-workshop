import {
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import React from 'react';
import TaskType from '../../models/type/TaskType';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 24,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  controls: {
    display: 'flex',
    padding: '0 32px',
    [theme.breakpoints.down('sm')]: {
      padding: '16px 0',
    },
  },

  detailsIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width: '100%',
    },
  },
  content: {
    flex: '1 0 auto',
  },

  marginInput: {
    margin: 12,
  },
  divider: {
    height: '100%',
    width: 1.5,
    [theme.breakpoints.down('sm')]: { height: 1.5, width: '100%' },
  },
}));

export default function TaskCard({
  taskData,
  deleteTask,
  editTask,
  chnageCompleted,
}: {
  taskData: TaskType;
  deleteTask: (e: any, id: number) => void;
  editTask: (taskData: TaskType) => void;
  chnageCompleted: (
    e: React.ChangeEvent<HTMLInputElement>,
    taskData: TaskType
  ) => void;
}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h6"
            variant="h6"
            className={classes.marginInput}
          >
            <TextField
              label="Task"
              value={taskData.title}
              disabled={true}
              variant="outlined"
              size="small"
              fullWidth={true}
            />
          </Typography>

          <Typography component="div" className={classes.marginInput}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={taskData.isDone}
                  onChange={(e) => chnageCompleted(e, taskData)}
                  name="isDone"
                  color="primary"
                />
              }
              label="is completed"
            />
          </Typography>
        </CardContent>
        <Divider className={classes.divider} />
        <div className={classes.controls}>
          <div className={classes.detailsIcon}>
            <IconButton
              aria-label="Edit"
              style={{
                backgroundColor: theme.palette.primary.main,
              }}
              onClick={(e) => editTask(taskData)}
            >
              <Edit style={{ color: '#ffffff' }} />
            </IconButton>
            <IconButton
              aria-label="Delete"
              style={{ backgroundColor: 'rgb(220, 0, 0, 0.8)' }}
              onClick={(e) => {
                return deleteTask(e, taskData.id);
              }}
            >
              <Delete style={{ color: '#ffffff' }} />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}
