import './App.css';

function App() {
  const barcodeScan = () => {
    window.cordova.plugins.barcodeScanner.scan(
      function (result: any) {
        if (!result.cancelled) {
          alert('result: ' + result);
        }
      },
      function (error: any) {
        alert('Scanning failed: ' + error);
      },
      {
        formats: 'CODE_128',
        prompt: 'Posicione o código de barras na linha vermelha',
        orientation: 'landscape',
        disableSuccessBeep: false,
      },
    );
  };

  return (
    <>
      <h1>Scanner</h1>
      <button onClick={barcodeScan}>Scan</button>
    </>
  );
}

export default App;
