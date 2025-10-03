async function getBitcoinPrice() {
  const res = await fetch(`https://cointradermonitor.com/api/pbb/v1/ticker`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export { getBitcoinPrice };
