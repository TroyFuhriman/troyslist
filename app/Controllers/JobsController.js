import _jobsService from "../Services/JobsService.js";
import _store from "../store.js";

//Private
function _draw() {
  let template = ""
  let jobs = _store.State.jobs;
  jobs.forEach(job => template += job.Template)
  document.getElementById("jobs").innerHTML = template
}

//Public
export default class JobsController {
  constructor() {
    _store.subscribe("jobs", _draw);
  }


  apply(jobId) {
    _jobsService.apply(jobId)

  }
  delete(jobId) {
    _jobsService.delete(jobId)
  }
  addJob(event) {
    event.preventDefault();
    let formData = event.target
    let newJobObj = {
      company: formData.company.value,
      jobTitle: formData.jobTitle.value,
      hours: formData.hours.value,
      rate: formData.rate.value,
      description: formData.description.value,

    }
    _jobsService.create(newJobObj)
    formData.reset()
  }
  switchJobs() {
    document.getElementById("jobForm").classList.remove("hidden")
    document.getElementById("jobs").classList.remove("hidden")
    document.getElementById("carForm").classList.add("hidden")
    document.getElementById("cars").classList.add("hidden")
    document.getElementById("houses").classList.add("hidden")
    document.getElementById("houseForm").classList.add("hidden")
    _jobsService.switchJobs()
  }
}
