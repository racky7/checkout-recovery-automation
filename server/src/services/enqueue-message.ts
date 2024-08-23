import { messageQueue } from "../config/bullmq";

const enqueueMessage = async (uniqueId: string, data: any, delay: number) => {
  // Remove existing messages
  const existingJob = await messageQueue.getJob(uniqueId);

  if (existingJob) {
    await existingJob.remove();
  }

  // Add new message
  const jobName = `job-${uniqueId}`;
  await messageQueue
    .add(jobName, data, {
      delay,
      jobId: uniqueId,
    })
    .then(() => {
      console.log(`Message enqueued for jobId - ${uniqueId}`);
    });
};

export default enqueueMessage;
