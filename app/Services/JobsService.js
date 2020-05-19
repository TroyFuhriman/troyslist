import store from "../store.js";
import Job from "../Models/Jobs.js"


//@ts-ignore
let _api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 15000,
})
class JobsService {
  switchJobs() {
    this.getJobs()
  }
  create(newJobObj) {
    _api.post("", newJobObj)
      .then(res => {
        console.log(res);
        this.getJobs()
      })
      .catch(err => console.error(err))
  }


  constructor() {
    this.getJobs()
  }



  getJobs() {
    _api.get()
      .then(res => {
        let newJobs = res.data.data.map(jobData => new Job(jobData))
        store.commit("jobs", newJobs);
      })
      .catch(error => console.error(error))
  }

  apply(jobId) {
    let foundJob = store.State.jobs.find(job => job.id == jobId)
    if (foundJob) {
      foundJob.rate += 100
      _api.put(jobId, foundJob)
        .then(res => {
          this.getJobs()
        })
        .catch(error => console.error(error))
    }
  }
  delete(jobId) {
    _api.delete(jobId)
      .then(res => {
        console.log(res);
        this.getJobs()
      })
      .catch(err => console.log(err))
  }
}

const service = new JobsService();
export default service;