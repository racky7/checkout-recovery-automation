import { messageQueue } from "../config/bullmq";

const enqueueMessage = async (uniqueId: string, data: any, delay: number) => {
  const jobId = `customer-${uniqueId}`;
  // Remove existing messages
  const existingJob = await messageQueue.getJob(jobId);

  if (existingJob) {
    await existingJob.remove();
  }

  // Add new message
  const jobName = `job-${uniqueId}`;
  await messageQueue
    .add(jobName, data, {
      delay,
      jobId: jobId,
    })
    .then(() => {
      console.log(`Message enqueued for jobId - ${jobId}`);
    });
};

export default enqueueMessage;
