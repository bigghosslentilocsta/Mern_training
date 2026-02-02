// MODULE 2: COURSE CATALOG ENGINE

// Local data
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

/**
 * Get published courses
 * @returns {Array} Published courses
 */
function getPublishedCourses() {
  return courses.filter(course => course.published);
}

/**
 * Sort courses by price (high → low)
 * @returns {Array} Courses sorted by price descending
 */
function sortCoursesByPrice() {
  return [...courses].sort((a, b) => b.price - a.price);
}

/**
 * Extract { title, price } only
 * @returns {Array} Array of objects with title and price
 */
function extractTitleAndPrice() {
  return courses.map(({ title, price }) => ({ title, price }));
}

/**
 * Calculate total value of published courses
 * @returns {number} Total value of published courses
 */
function calculatePublishedCoursesValue() {
  return courses
    .filter(course => course.published)
    .reduce((total, course) => total + course.price, 0);
}

/**
 * Add a new course immutably
 * @param {Object} newCourse - New course to add
 * @returns {Array} New courses array with added course
 */
function addCourse(newCourse) {
  return [...courses, newCourse];
}

// Run and display outputs
console.log('\n=== COURSE ENGINE ===');
console.log('Published Courses:');
console.log(getPublishedCourses());
console.log('\nSorted by Price:');
console.log(sortCoursesByPrice());
console.log('\nTitle and Price:');
console.log(extractTitleAndPrice());
console.log('\nTotal Published Value:', calculatePublishedCoursesValue());

module.exports = {
  getPublishedCourses,
  sortCoursesByPrice,
  extractTitleAndPrice,
  calculatePublishedCoursesValue,
  addCourse
};
