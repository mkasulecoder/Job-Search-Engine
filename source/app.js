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
      num_jobs += 1;
    });
    // Count number of jobs
    // console.log(num_jobs);
    numOfjobs(num_jobs);
  })
  .catch((err) => {
    console.log("There was an error in fetching data");
  });

// Count number of jobs
function numOfjobs(count) {
  let numCountText = document.getElementById("number-of-jobs");
  numCountText.innerText = count;
}
