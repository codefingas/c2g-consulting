/*eslint-disable no-async-promise-executor */
import firebase from 'firebase';
const url = process.env.VUE_APP_SERVER;
// const url = "http://localhost:5000/c2g-consulting/us-central1/c2gLicences";
// const url = "https://41419370cb52.ngrok.io/ajo-dev/us-central1/api";

const getUserDets = () => firebase.auth().currentUser.uid;
console.log("the User dets", getUserDets());

class asc {
  constructor(entity) {
    this.entity = entity;
  }
  postCalls(serviceUrl, data) {
    return new Promise(async (resolve, reject) => {
      const request = await fetch(
        `${url}/ajo-v1/${this.entity}${serviceUrl}`, //TODO: change the url to processes.own
        {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            // company: `${process.env.VUE_APP_COMPANY_ID === "undefined" ? }`
            // mode: "no-cors",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );

      request
        .json()
        .then((rs) => rs)
        .then(res => res)
        .then((rs) => {
          resolve(rs); // the resolved request
        })
        .catch((err) => {
          reject(err);
        });
    });
  }


  putCall(serviceUrl, data) {
    return new Promise(async (resolve, reject) => {
      const request = await fetch(
        `${url}/ajo-v1/${this.entity}${serviceUrl}`, //TODO: change the url to processes.own
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            // mode: "no-cors",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );

      request
        .json()
        .then((rs) => rs)
        .then(res => res)
        .then((rs) => {
          resolve(rs); // the resolved request
        })
        .catch((err) => {
          reject(err);
        });
    });
  }


  getCalls(getUrl) {
    return new Promise(async (resolve, reject) => {
      const request = await fetch(
        `${url}/ajo-v1/${this.entity}${getUrl}`, //TODO: change the url to processes.own
        {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            // mode: "no-cors",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          // body: JSON.stringify(data), // body data type must match "Content-Type" header
        }
      );

      request
        .json()
        .then((rs) => rs)
        .then(res => res)
        .then((rs) => {
          resolve(rs); // the resolved request
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default asc;
