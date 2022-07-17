import { ImageSourcePropType } from "react-native";

export interface ICourse {
  id: number;
  image: ImageSourcePropType;
  title: string;
  desc: string;
  subCourses: string[];
  price: number;
}
const courses: ICourse[] = [
  {
    id: 1,
    image: require("../../assets/courses/frontend.jpeg"),
    title: "Frontend Web Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["HTML", "CSS", "JavaScript", "ReactJs"],
    price: 999,
  },
  {
    id: 2,
    image: require("../../assets/courses/backend.png"),
    title: "Backend Web Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["NodeJs", "SQL", "MongoDB", "ExpressJs"],
    price: 999,
  },
  {
    id: 3,
    image: require("../../assets/courses/data_science.png"),
    title: "Data Science",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["Machine Learning Algorithms	", "Artificial Intelligence	", "Data Analysis","Statistics","Big Data"],
    price: 999,
  },
  {
    id: 4,
    image: require("../../assets/courses/ds_algo.jpeg"),
    title: "Data Structures And Algorithms",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["Basics of Programming", "Data Structures and Alogrithms", "Advance Data Structures and Algorithms"],
    price: 999,
  },
  {
    id: 5,
    image: require("../../assets/courses/android_dev.png"),
    title: "Android Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["React Native", "Flutter", "Kotlin"],
    price: 999,
  },
  {
    id: 6,
    image: require("../../assets/courses/blockchain_dev.png"),
    title: "Blockchain Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics,,`,
    subCourses: ["Solidity Fundamentals", "ReactJs", "Authentication and Authorization"],
    price: 999,
  },
  {
    id: 7,
    image: require("../../assets/courses/devops.png"),
    title: "Devops",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up onesourceethics`,
    subCourses: ["CI/CD Course", "AWS and other platforms", "Kubernetes and Docker"],
    price: 999,
  },
  ];

  export default courses;