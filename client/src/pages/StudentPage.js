import React, { useEffect, useState } from 'react'
import axios from '../utils/apiCall';
import { makeStyles } from '@material-ui/core/styles';  
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';

const StudentPage = () => {

    const classes = useStyles();
    const { studentId } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        axios.get(`/students/${studentId}`)
        .then((res) => setStudent(res.data))
    }, [studentId]);

    return (
        <Grid container className={classes.main} justifyContent="center">
            Student Page
            {student && (
                <React.Fragment>
                    <Grid item xs={6} md={12}>
                        {student.id}
                    </Grid>
                    <Grid item xs={6} md={12}>
                        {student.fullName}
                    </Grid>
                </React.Fragment>
            )}
        </Grid>
    )
}

export default StudentPage


const useStyles = makeStyles({
	main: {
        paddingTop: 40
    },
});
