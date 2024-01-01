export const useWebGPU = () => {
  const isWebGPUAvailable = navigator.gpu as boolean;
  if (isWebGPUAvailable) {
    console.info("WebGPU is available!");
  } else {
    console.info("WebGPU is not available!");
  }

  return { isWebGPUAvailable };
};
