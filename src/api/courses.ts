interface ICourse {
  id: number;
  image: NodeRequire;
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
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["HTML", "CSS", "JavaScript", "ReactJs"],
    price: 999,
  },
  {
    id: 2,
    image: require("../../assets/courses/backend.png"),
    title: "Backend Web Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["NodeJs", "SQL", "MongoDB", "ExpressJs"],
    price: 999,
  },
  {
    id: 3,
    image: require("../../assets/courses/data_science.png"),
    title: "Data Science",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["Machine Learning Algorithms	", "Artificial Intelligence	", "Data Analysis","Statistics","Big Data"],
    price: 999,
  },
  {
    id: 4,
    image: require("../../assets/courses/ds_algo.jpeg"),
    title: "Data Structures And Algorithms",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["Basics of Programming", "Data Structures and Alogrithms", "Advance Data Structures and Algorithms"],
    price: 999,
  },
  {
    id: 5,
    image: require("../../assets/courses/android_dev.png"),
    title: "Android Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["React Native", "Flutter", "Kotlin"],
    price: 999,
  },
  {
    id: 6,
    image: require("../../assets/courses/blockchain_dev.png"),
    title: "Blockchain Development",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,,`,
    subCourses: ["Solidity Fundamentals", "ReactJs", "Authentication and Authorization"],
    price: 999,
  },
  {
    id: 7,
    image: require("../../assets/courses/devops.png"),
    title: "Devops",
    desc: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics`,
    subCourses: ["CI/CD Course", "AWS and other platforms", "Kubernetes and Docker"],
    price: 999,
  },
  ];

  export default courses;