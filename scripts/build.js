const mongoose = require('mongoose');
const db = require('../server/models');

mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose
    .connect(db)
    .then(() => console.log('Connected to MongoDB successfully from seed'))
    .catch(err => console.log(err));
    
// const userSeed = {
//   firstname: 'Sara',
//   lastname: 'Bracewell',
//   username: 'loveIt',
//   password: 'gotToLoveIt',
//   email: 'bracewell.sara@gmail.com',
// };
// // // ];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertOne(userSeed))
//   .then((data) => {
//     console.log(data.insertedCount + ' user records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const clinicSeed = [
//   {
//     clinicname: 'Childrens Clinic',
//     address: '360 Smith Ave. Suite 300',
//     city: 'St. Paul',
//     state: 'MN',
//     zip: 55101,
//     phone: '(651)999-9933',
//   },
//   {
//     clinicname: 'Childrens Respiratory',
//     address: '360 Smith Ave. Suite 601',
//     city: 'St. Paul',
//     state: 'MN',
//     zip: 55101,
//     phone: '(651)999-9977',
//   },
//   {
//     clinicname: 'Childrens ENT',
//     address: '360 Smith Ave. Suite 610',
//     city: 'St. Paul',
//     state: 'MN',
//     zip: 55101,
//     phone: '(651)999-9988',
//   },
//   {
//     clinicname: 'Allergy MN',
//     address: '555 George Ave.',
//     city: 'St. Paul',
//     state: 'MN',
//     zip: 55106,
//     phone: '(651)999-0011',
//   },
//   {
//     clinicname: 'Gastro MN',
//     address: '555 Black Ave.',
//     city: 'St. Paul',
//     state: 'MN',
//     zip: 55106,
//     phone: '(651)222-0022',
//   },
// ];
// db.Clinic
//   .remove({})
//   .then(() => db.Clinic.collection.insertMany(clinicSeed))
//   .then((data) => {
//     console.log('clinics of length: ' + data.insertedIds.length + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// // will have to create seeds for healthLog, doctors, clinics, prescriptions (and appointments?)
// const healthLogSeed = [
//   {
//     date: '10/20/2017',
//     doctor: 'Kristin King',
//     clinic: 'Childrens Respiratory',
//     visitPurpose: '3 month follow up',
//     notes: 'Having issues with new meds, so the prescription was changed. Sick a lot - suggests follow up with respiratory doctor asap. Weight should be monitored.',
//     nextAppt: '3 months',
//     heightIn: 50,
//     weightLb: 55,
//   },
//   {
//     date: '10/28/2017',
//     doctor: 'Larry Lungs',
//     clinic: 'Childrens Respiratory',
//     visitPurpose: '3 month follow up',
//     notes: 'Been sick every month, asthma plan not working. Need to do more with allergy doctor if everything is starting with her nose. And check in with ENT to see if there is anything else that could be causing this',
//     nextAppt: '3 months',
//     heightIn: 50,
//     weightLb: 55,
//   },
//   {
//     date: '10/29/2017',
//     doctor: 'Ned Nose',
//     clinic: 'Childrens ENT',
//     visitPurpose: '3 month follow up',
//     notes: 'Nasal tissue inflamed, should do surgery to reduce this if desired. Only temorary help, need to figure out allergy issue. Need to see someone new, game name. Allergy or immunology issue.',
//     nextAppt: '1 month',
//     heightIn: 51,
//     weightLb: 57,
//   },
//   {
//     date: '11/01/2017',
//     doctor: 'Sam Sneezy',
//     clinic: 'Allergy MN',
//     visitPurpose: 'Allergy testing, new doctor visit',
//     notes: 'Definitely allergy to this. But over reacting to it. Need to try new med on the market to remove allergy reaction. Start that tomorrow. Need records and solution from previous allergist. Did blood draw for immune issues',
//     nextAppt: '3 months',
//     heightIn: 51,
//     weightLb: 50,
//   },
//   {
//     date: '11/15/2017',
//     doctor: 'Sally Stomach',
//     clinic: 'Gastro MN',
//     visitPurpose: '3 month follow up',
//     notes: 'Doctor not happy with previous labs, want to do endoscopy to check for issues. Explained ENT wants to do surgery, need to get them to do together so less issue with anesthesia. They will call me with date/time. Changed prescription to 10mls twice daily.',
//     nextAppt: '3 months',
//     heightIn: 50,
//     weightLb: 52,
//   },
//   {
//     date: '12/01/2017',
//     doctor: 'Kristin King',
//     clinic: 'Childrens Clinic',
//     visitPurpose: 'Pre-Op',
//     notes: 'Looks good for surgery. Happy with allergist workup into immune issues. Need to add vit D to rx, and up probiotic. Want to change to higher fat diet to get weight better',
//     nextAppt: '3 months',
//     heightIn: 52,
//     weightLb: 52,
//   },
// ];

// // use HealthLog;

// db.HealthLog
//   .remove({})
//   .then(() => db.HealthLog.collection.insertMany(healthLogSeed))
//   .then((data) => {
//     console.log('healthlogs of length: ' + data.insertedIds.length + ' records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });


// const symptomSeed = [
//   {
//     symptomType: 'Runny nose',
//     symptomDate: '03/17/2018',
//     symptomTime: '11:30am',
//     symptomInfo: 'Nose started running with a slight cough. Will wait to start asthma meds.',
//   },
//   {
//     symptomType: 'Continued cough',
//     symptomDate: '03/18/2018',
//     symptomTime: '06:00am',
//     symptomInfo: 'Started red zone with budesonide, albuteral and prednisolone',
//   },
//   {
//     symptomType: 'Not sleeping',
//     syptomDate: '03/19/2018',
//     symptomTime: '07:30pm',
//     symptomInfo: 'Added codine, benadryl and ibuprophen to night-time routine',
//   },
//   {
//     symptomType: 'Continued cough',
//     symptomDate: '03/23/2018',
//     symptomTime: '06:00am',
//     symptomInfo: 'Still not better, called resp doc and got approval for another 2 days of prednisolone',
//   },
// ];

// db.SymptomJournal
//   .remove({})
//   .then(() => db.SymptomJournal.collection.insertMany(symptomSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' symptom journal records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

const prescriptionSeed = [
    {
        prescriptionName: 'lansiprosole',
        amount: '10mLs',
        timesaday: 2,
        dateprescribed: '10/16/16',
        doctorprescibed: 'Dr. Kristin King',
        generalinstructions: 'Take half hour before breakfast and dinner.',
    },
    {
        prescriptionName: 'prednisolone',
        amount: '10mLs',
        timesaday: 2,
        dateprescribed: '10/16/17',
        doctorprescibed: 'Dr. Kristin King',
        generalinstructions: 'Prescription dose increased. Take with meds, be careful about taking too close to bed time.',
    },
    {
        prescriptionName: 'singulair',
        amount: '5mL disolvable tablet',
        timesaday: 1,
        dateprescribed: '10/16/17',
        doctorprescibed: 'Dr. Larry Lungs',
        generalinstructions: 'Take at bed time. Can cause night-terrors',
    },
    {
        prescriptionName: 'qnasl',
        amount: '1 spray each nostril',
        timesaday: 1,
        dateprescribed: '10/16/18',
        doctorprescibed: 'Dr. Sam Sneezy',
        generalinstructions: 'Difficult to take, hurts at first. Do in the morning 15minutes after any other nose sprays',
    },
];

db.Prescription
    .remove({})
    .then(() => db.Prescription.collection.insertMany(prescriptionSeed))
    .then((data) => {
        console.log(data.insertedIds.length + ' prescription list records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });

// const appointmentSeed = [
//   {
//     name: 'Appointment1',
//     date: '03/17/2018',
//     time: '11:30am',
//     doctor: 'Dr. Kristin King',
//     clinic: 'Clinic C',
//   },
//   {
//     name: 'Appointment2',
//     date: '03/18/2018',
//     time: '11:30am',
//     doctor: 'Dr. Sam Sneezy',
//     clinic: 'Clinic B',
//   },
//   {
//     name: 'Appointment3',
//     date: '03/19/2018',
//     time: '11:30am',
//     doctor: 'Dr. O',
//     clinic: 'Clinic C',
//   },
// ];

// db.Appointment
//   .remove({})
//   .then(() => db.Appointment.collection.insertMany(appointmentSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' appointment records inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const doctorSeed = [
//   {
//     firstname: 'Sally',
//     lastname: 'Stomach',
//     clinic: 'Clinic A',
//     phone: '666-666-6666',
//   },
//   {
//     firstname: 'Larry',
//     lastname: 'Lungs',
//     clinic: 'Clinic B',
//     phone: '555-555-5555',
//   },
//   {
//     firstname: 'Kristin',
//     lastname: 'King',
//     clinic: 'Clinic C',
//     phone: '444-444-4444',
//   },
// ];

// db.Doctor
//   .remove({})
//   .then(() => db.Doctor.collection.insertMany(doctorSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' doctors inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });

// const attachmentSeed = [
//   {
//     doctorname: 'Kristin King',
//     contentdate: '03/17/2018',
//     attachmentsubject: 'chest x-ray',
//   },
// ];

// db.Attachments
//   .remove({})
//   .then(() => db.Attachments.collection.insertMany(attachmentSeed))
//   .then((data) => {
//     console.log(data.insertedIds.length + ' attachment inserted!');
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });