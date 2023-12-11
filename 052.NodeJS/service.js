const { json } = require("express");

const data = [
  {
    id: "javascript",
    label: "JavaScript",
    category: "programmingLanguages",
    priority: 1,
  },
  {
    id: "typescript",
    label: "TypeScript",
    category: "programmingLanguages",
    priority: 1,
  },
  { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
  { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
  { id: "go", label: "GO", category: "programmingLanguages", priority: 3 },
  {
    id: "firebasestorage",
    label: "Firebase Storage",
    category: "databases",
    priority: 2,
  },
  {
    id: "ibmcloudant",
    label: "IBM Cloudant",
    category: "databases",
    priority: 2,
  },
  { id: "react", label: "React", category: "webTechnologies", priority: 1 },
  {
    id: "angularjs",
    label: "ANGULARJS",
    category: "webTechnologies",
    priority: 1,
  },
  { id: "redux", label: "Redux", category: "webTechnologies", priority: 1 },
  {
    id: "materialui",
    label: "Material UI",
    category: "webTechnologies",
    priority: 1,
  },
  { id: "git", label: "Git", category: "otherSkills", priority: 2 },
  {
    id: "adobephotoshop",
    label: "Adobe Photoshop",
    category: "otherSkills",
    priority: 2,
  },
];

function getAllData() {
  if (!json.length) throw new Error("arr is enpty");
  return data;
}function getAllData() {
  if (!json.length) throw new Error("arr is enpty");
  return data;
}

function getId(id) {
  if (!id) throw new Error("errrrrrpr");
  const filt = data.filter((el) => el.id == id);
  return filt;
}

function updateDatabyId(id, label, category, priority) {
    let flag = false
    
    const filterArr = data.filter((el) => el.id != id);
  filterArr.push({
    id: id,
    label: label,
    category: category,
    priority: priority,
  });
  return filterArr;
}

function deleteElementById(id) {
  const filter = data.filter((el) => el.id != id);
  return filter;
}

module.exports = { getAllData, getId, updateDatabyId, deleteElementById };
