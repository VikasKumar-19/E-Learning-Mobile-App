type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  About: undefined;
  Contact: undefined;
  Courses: CourseStackParamList;
};

export type CourseStackParamList = {
  AllCourses: undefined;
  CourseDetails: {
    courseId: number
  }
}

export default RootStackParamList;