
let innomatics = {
    companyName: "Innomatics Research Labs",
    companyType: "IT Training Institute",
    established: 2019,

    courses: {
        course1: {
            name: "Data Science",
            fees: {
                classroom: 87600,
                online: 75000
            },
            duration: "6 Months"
        },

        course2: {
            name: "Full Stack Development",
            fees: {
                classroom: 75800,
                online: 65800
            },
            duration: "6 Months"
        },

        course3: {
            name: "Advanced Data Analytics",
            fees: {
                classroom: null,
                online: null
            },
            duration: "Contact Institute"
        }
    },

    branches: {
        hyderabad: {
            kukatpally: {
                city: "Hyderabad",
                area: "Kukatpally",
                state: "Telangana",
                pincode: 500085,
                contact: {
                    phone: "9951666670"
                }
            },

            dilsukhnagar: {
                city: "Hyderabad",
                area: "Dilsukhnagar",
                state: "Telangana",
                pincode: 500035,
                contact: {
                    phone: "9951666674"
                }
            }
        },

        bengaluru: {
            city: "Bengaluru",
            state: "Karnataka",
            area: "HSR Layout",
            contact: {
                phone: "9951666672"
            }
        },

        pune: {
            city: "Pune",
            state: "Maharashtra",
            area: "Kothrud",
            contact: {
                phone: "9951666671"
            }
        }
    },

    training: {
        modes: {
            mode1: "Classroom",
            mode2: "Online"
        },

        facilities: {
            facility1: "Practical Training",
            facility2: "Projects",
            facility3: "Interview Preparation"
        }
    }
};


// CREATE OPERATION
innomatics.courses.course = {
    name: "Python Full Stack",
    fees: {
        classroom: 50000,
        online: 40000
    },
    duration: "5 Months"
};

console.log(innomatics.courses.course);


// READ OPERATION
function readDetails() {
    console.log("Company:", innomatics.companyName);

    console.log("All Courses:", innomatics.courses);

    console.log("Data Science Fee:",innomatics.courses.course1.fees.classroom);

    console.log("Hyderabad Branch:",innomatics.branches.hyderabad.kukatpally);

    console.log("Bengaluru Branch:",innomatics.branches.bengaluru);

    console.log("Training Modes:",innomatics.training.modes);

}


// UPDATE OPERATION
function updateCourse() {
    innomatics.courses.course1.name = "Advanced Data Science";

    innomatics.courses.course1.fees.classroom = 90000;

    innomatics.courses.course1.duration = "8 Months";

    console.log("Course updated successfully");
    console.log(innomatics.courses.course1);
}


// DELETE OPERATION
function deleteCourse() {
    delete innomatics.courses.course2;

    console.log("Course deleted successfully");
    console.log(innomatics.courses);
}


// CREATE BRANCH
function createBranch() {
    innomatics.branches.hyderabad.miyapur = {
        city: "Hyderabad",
        area: "Miyapur",
        state: "Telangana",
        pincode: 500049,
        contact: {
            phone: "9999999999"
        }
    };

    console.log("Branch created successfully");
    console.log(innomatics.branches.hyderabad.miyapur);
}


// READ BRANCH
function readBranch() {
    console.log(
        innomatics.branches.hyderabad.kukatpally
    );
}


// UPDATE BRANCH
function updateBranch() {
    innomatics.branches.hyderabad.kukatpally.contact.phone =
        "8888888888";

    console.log("Branch updated successfully");
    console.log(innomatics.branches.hyderabad.kukatpally);
}


// DELETE BRANCH
function deleteBranch() {
    delete innomatics.branches.hyderabad.dilsukhnagar;

    console.log("Branch deleted successfully");
    console.log(innomatics.branches.hyderabad);
}


// EXECUTE CRUD OPERATIONS
createCourse();
readDetails();
updateCourse();
deleteCourse();

createBranch();
readBranch();
updateBranch();
deleteBranch();

console.log("Final Company Object:", innomatics);
