import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { day,month,year } from "../../redux/actions";
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import React from 'react';
import './Signup.css';


class Date extends React.Component {
  constructor(props) {
      super(props)
      this.state = {

      }
  }

  render(){
    
    return (
      <div className='container_date'>
        <FormControl variant="outlined" id='day_form' className="formControl">
          <InputLabel htmlFor="outlined-month-native-simple">Month </InputLabel>
          <Select
            native
            onChange={(e)=>{this.props.month([e.target.options[e.target.selectedIndex].text])}}
            label="month"
            inputProps={{
              name: 'month',
              id: 'outlined-month-native-simple',
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
        
        <FormControl variant="outlined" className="formControl1">
          <InputLabel htmlFor="outlined-day-native-simple">Day </InputLabel>
          <Select
            native
            onChange={(e)=>{this.props.day([e.target.options[e.target.selectedIndex].text])}}
            label="day"
            inputProps={{
              name: 'day ',
              id: 'outlined-day-native-simple',
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
  
        <FormControl variant="outlined" className="formControl">
          <InputLabel htmlFor="outlined-year-native-simple">Year </InputLabel>
          <Select
            native
            onChange={(e)=>{this.props.year([e.target.options[e.target.selectedIndex].text])}}
            label="year"
            inputProps={{
              name: 'year',
              id: 'outlined-year-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option value={1}>2021</option>
            <option value={2}>2020</option>
            <option value={3}>2019</option>
            <option value={4}>2018</option>
            <option value={5}>2017</option>
            <option value={6}>2016</option>
            <option value={7}>2015</option>
            <option value={8}>2014</option>
            <option value={9}>2013</option>
            <option value={10}>2012</option>
            <option value={11}>2011</option>
            <option value={12}>2010</option>
            <option value={13}>2009</option>
            <option value={14}>2008</option>
            <option value={15}>2007</option>
            <option value={16}>2006</option>
            <option value={17}>2005</option>
            <option value={18}>2004</option>
            <option value={19}>2003</option>
            <option value={20}>2002</option>
            <option value={21}>2001</option>
            <option value={22}>2000</option>
            <option value={23}>1999</option>
            <option value={24}>1998</option>
            <option value={25}>1997</option>
            <option value={26}>1996</option>
            <option value={27}>1995</option>
            <option value={28}>1994</option>
            <option value={29}>1993</option>
            <option value={30}>1992</option>
            <option value={31}>1991</option>
            <option value={32}>1990</option>
            <option value={33}>1989</option>
            <option value={34}>1988</option>
            <option value={35}>1987</option>
            <option value={36}>1986</option>
            <option value={37}>1985</option>
            <option value={38}>1984</option>
            <option value={39}>1983</option>
            <option value={40}>1982</option>
            <option value={41}>1981</option>
            <option value={42}>1980</option>
            <option value={43}>1979</option>
            <option value={44}>1978</option>
            <option value={45}>1977</option>
            <option value={46}>1976</option>
            <option value={47}>1975</option>
            <option value={48}>1974</option>
            <option value={49}>1973</option>
            <option value={50}>1972</option>
            <option value={51}>1971</option>
            <option value={52}>1970</option>
            <option value={53}>1969</option>
            <option value={54}>1968</option>
            <option value={55}>1967</option>
            <option value={56}>1966</option>
            <option value={57}>1965</option>
            <option value={58}>1964</option>
            <option value={59}>1963</option>
            <option value={60}>1962</option>
            <option value={61}>1961</option>
            <option value={62}>1960</option>
            <option value={63}>1959</option>
            <option value={66}>1958</option>
            <option value={65}>1957</option>
            <option value={66}>1956</option>
            <option value={67}>1955</option>
            <option value={68}>1954</option>
            <option value={69}>1953</option>
            <option value={70}>1952</option>
            <option value={71}>1951</option>
            <option value={72}>1950</option>
            <option value={73}>1949</option>
            <option value={74}>1948</option>
            <option value={77}>1947</option>
            <option value={76}>1946</option>
            <option value={77}>1945</option>
            <option value={78}>1944</option>
            <option value={79}>1943</option>

          </Select>
        </FormControl>
      </div>
    );
  }
}

// Redux
const mapStateToProps = (state) => {
  return {
    day2: state.day2,
    month2: state.month2,
    year2: state.year2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    day: (x) => {dispatch(day(x))},
    month: (x) => {dispatch(month(x))},
    year: (x) => {dispatch(year(x))},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Date);
