const url = "./source/jobs.json";
const job_section = document.getElementById("job-section");

fetch(url, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((myData) => {
    let job_post = "";
    let num_jobs = 0;

    //loop through the data
    myData.map((data) => {
      //Create an HTML for each job post
      job_post += `<div class="job-card">
                        <div id="job-image">
                            <img src="${data.image}" alt="company logo">
                        </div>
                        <div class="job-detail">
                            <h6>${data.position}</h6>
                            <p>${data.description}</p>
                        </div>
                        <div class="job-categories">
                            <div>
                                ${data.type}
                            </div>
                            <div>
                                Est. ${data.salary}
                            </div>
                            <div>
                                ${data.level}
                            </div>
                        </div>

                        <!--Buttons-->
                        <div class="job-buttons">
                            <button class="button" id="apply-now">Apply Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px"
                                fill="#297ae6">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                            </svg>
                        </div>
                    </div>`;

      // Add inner html to job section div
      job_section.innerHTML = job_post;
      // Count number of jobs
      num_jobs += 1;
    });
    // console.log(num_jobs);
    numOfJobs(num_jobs);
  })
  .catch((err) => {
    console.log("There was an error in fetching data");
  });

// Count number of jobs
function numOfJobs(count) {
  let numCountText = document.getElementById("number-of-jobs");
  numCountText.innerText = count;
}

//Get check filters
let fulltime = document.getElementById("full-time");
let inputValue = null;
let spanText = document.getElementById("fliter-2");

fulltime.addEventListener("click", function (e) {
  if (fulltime.checked) {
    inputValue = e.target.value;
    //list matching jobs
    sortData("Full time");
    console.log(inputValue);
  } else {
    inputValue = null;
    // list all jobs
    sortData(inputValue);
    console.log(inputValue);
  }
});

// Filter JObs Function

function sortData(job_type) {
  fetch(url, {
    method: "GET",
  })
    .then((result) => {
      return result.json();
    })
    .then((dataList) => {
      //create job post
      let sortedPost = "";
      let allPosts = "";
      let num = 0;
      //count job that match

      dataList.map((filteredData) => {
        if (filteredData.type === job_type) {
          let numSortedJobs = 0;
          // console.log(filteredData.position);
          sortedPost += `<div class="job-card">
                        <div id="job-image">
                            <img src="${filteredData.image}" alt="company logo">
                        </div>
                        <div class="job-detail">
                            <h6>${filteredData.position}</h6>
                            <p>${filteredData.description}</p>
                        </div>
                        <div class="job-categories">
                            <div>
                                ${filteredData.type}
                            </div>
                            <div>
                                Est. ${filteredData.salary}
                            </div>
                            <div>
                                ${filteredData.level}
                            </div>
                        </div>

                        <!--Buttons-->
                        <div class="job-buttons">
                            <button class="button" id="apply-now">Apply Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px"
                                fill="#297ae6">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                            </svg>
                        </div>
                    </div>`;

          // Add inner html to job section div
          job_section.innerHTML = sortedPost;
          // Count number of jobs
          numSortedJobs += 1;

          // update counted jobs
          numOfJobs(numSortedJobs);

          // update span text
          spanText.innerText = numSortedJobs;
        } else {
          // console.log(filteredData);
          allPosts += `<div class="job-card">
                        <div id="job-image">
                            <img src="${filteredData.image}" alt="company logo">
                        </div>
                        <div class="job-detail">
                            <h6>${filteredData.position}</h6>
                            <p>${filteredData.description}</p>
                        </div>
                        <div class="job-categories">
                            <div>
                                ${filteredData.type}
                            </div>
                            <div>
                                Est. ${filteredData.salary}
                            </div>
                            <div>
                                ${filteredData.level}
                            </div>
                        </div>

                        <!--Buttons-->
                        <div class="job-buttons">
                            <button class="button" id="apply-now">Apply Now</button>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px"
                                fill="#297ae6">
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                            </svg>
                        </div>
                    </div>`;

          // Add inner html to job section div
          job_section.innerHTML = allPosts;
          // Count number of jobs
          num += 1;

          // update counted jobs
          numOfJobs(num);

          // update span text
          spanText.innerText = num;
        }
      });
    })
    .catch((err) => console.log("Error processing data"));
}
