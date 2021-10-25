import React, { useEffect, useState } from 'react'
import axios from '../utils/apiCall';
import { makeStyles } from '@material-ui/core/styles';  
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';


const CoursePage = () => {

    const classes = useStyles();
    const { courseId } = useParams();
    const [course, setCourse] = useState(null);

    useEffect(() => {
        axios.get(`/courses/${courseId}`)
        .then((res) => setCourse(res.data))
    }, [courseId]);

    console.log(course)

    return (
        <Grid container className={classes.main} justifyContent="center">
            Course Page
            {course && (
                <React.Fragment>
                    <Grid item xs={6} md={12}>
                        {course.id}
                    </Grid>
                    <Grid item xs={6} md={12}>
                        {course.courseName}
                    </Grid>
                </React.Fragment>
            )}
        </Grid>
    )
}

export default CoursePage


const useStyles = makeStyles({
	main: {
        paddingTop: 40
    },
});
