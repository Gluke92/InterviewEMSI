import React from 'react'
import {
  makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(Industry, Jobs, PercentOccupation, PercentTotalJobs) {
  return { Industry, Jobs, PercentOccupation, PercentTotalJobs };
}

const rows = [
  createData('Software Publishers', 4654, 37.7, 8.8),
  createData('Computer Systems Design Services', 1873, 15.2, 9.1),
  createData('Custom Computer Programming Services', 1388, 11.2, 9.1),
  createData('Aircraft Manufacturing', 444, 3.6, 0.6),
  createData('Other Computer Related Services', 296, 2.4, 9.1),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Industry</TableCell>
            <TableCell align="right">Occupation Jobs in Industry (2015)</TableCell>
            <TableCell align="right">% of Occupation in Industry (2015)&nbsp;(g)</TableCell>
            <TableCell align="right">% of Total Jobs in Industry (2015)&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Industry}>
              <TableCell component="th" scope="row">
                {row.Industry}
              </TableCell>
              <TableCell align="right">{row.Jobs}</TableCell>
              <TableCell align="right">{row.PercentOccupation}</TableCell>
              <TableCell align="right">{row.PercentTotalJobs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}