function maiorNumero(arr) {
  let i = 0;
  let maior = arr[0];
  while (i < arr.length) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
    i++;
  }
  console.log(maior);
}
maiorNumero([10, 30]);
