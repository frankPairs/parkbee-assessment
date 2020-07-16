function delayAxiosResponse<T>(data: T): Promise<any> {
  return new Promise((resolve) => {
    const timeout = Math.random() * 1000;

    setTimeout(() => resolve([200, data]), timeout);
  });
}

export { delayAxiosResponse };
