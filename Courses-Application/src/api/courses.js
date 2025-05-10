export const fetchCourses = async () => {
  let response = await fetch("http://localhost:4000/courses");
  let data = await response.json();
  await delay;
  return data;
};

export const fetchCourse = async (id) => {
  let response = await fetch(`http://localhost:4000/courses/${id}`);
  let data = await response.json();
  return data;
};

export const deleteCourse = async (id) => {
  let response = await fetch(`http://localhost:4000/courses/${id}`, {
    method: "DELETE",
  });
  let data = await response.json();
  return data;
};

export const createCourse = async (course) => {
  let response = await fetch(`http://localhost:4000/courses/${id}`, {
    method: "POST",
    body: JSON.stringify(course),
  });
  let data = await response.json();
  return data;
};

const delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true);
  }, 2000);
});
