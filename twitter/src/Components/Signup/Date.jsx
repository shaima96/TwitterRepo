import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Signup.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Date() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    day: '',
    month:'',
    year:'',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className='container_date'>
      <FormControl variant="outlined"  id='day_form'className={classes.formControl}>
        <InputLabel htmlFor="outlined-day-native-simple">Day</InputLabel>
        <Select
          native
          value={state.day}
          onChange={handleChange}
          label="day"
          inputProps={{
            name: 'day',
            id: 'outlined-day-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>Augest</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-month-native-simple">Month</InputLabel>
        <Select
          native
          value={state.day}
          onChange={handleChange}
          label="month"
          inputProps={{
            name: 'month',
            id: 'outlined-month-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>         
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>

        </Select>
      </FormControl>
 
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-year-native-simple">Year</InputLabel>
        <Select
          native
          value={state.year}
          onChange={handleChange}
          label="year"
          inputProps={{
            name: 'year',
            id: 'outlined-year-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1970</option>
          <option value={2}>1971</option>
          <option value={3}>1972</option>
          <option value={4}>1973</option>
          <option value={5}>1974</option>
          <option value={6}>1975</option>
          <option value={7}>1976</option>
          <option value={8}>1977</option>
          <option value={9}>1978</option>
          <option value={10}>1979</option>
          <option value={11}>1980</option>
          <option value={12}>1981</option>
          <option value={13}>1982</option>
          <option value={14}>1983</option>
          <option value={15}>1984</option>
          <option value={16}>1985</option>
          <option value={17}>1986</option>
          <option value={18}>1987</option>
          <option value={19}>1988</option>
          <option value={20}>1989</option>
          <option value={21}>1990</option>
          <option value={22}>1991</option>
          <option value={23}>1992</option>
          <option value={24}>1993</option>
          <option value={25}>1994</option>
          <option value={26}>1995</option>
          <option value={27}>1996</option>
          <option value={28}>1997</option>
          <option value={29}>1998</option>
          <option value={30}>1999</option>
          <option value={31}>2000</option>
          <option value={32}>2001</option>
          <option value={33}>2002</option>
          <option value={34}>2003</option>
          <option value={35}>2004</option>
          <option value={36}>2005</option>
          <option value={37}>2006</option>
          <option value={38}>2007</option>
          <option value={39}>2008</option>
          <option value={40}>2009</option>
          <option value={41}>2010</option>
          <option value={42}>2011</option>
          <option value={43}>2012</option>
          <option value={44}>2013</option>
          <option value={45}>2014</option>
          <option value={46}>2015</option>
          <option value={47}>2016</option>
          <option value={48}>2017</option>
          <option value={49}>2018</option>
          <option value={50}>2019</option>
          <option value={51}>2020</option>
          <option value={52}>2021</option>

        </Select>
      </FormControl>
    </div>
  );
}
