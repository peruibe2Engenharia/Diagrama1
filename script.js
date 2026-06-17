const apt = new URLSearchParams(location.search).get('apto') || '301';
document.getElementById('apt-num').textContent = apt;


const URL_DO_PDF = "EL-13_DIAGR. E TAB CARGA_R02.pdf";

const btn = document.getElementById('open-btn');
btn.href = URL_DO_PDF;
btn.target = '_blank';
btn.download = 'documento-apto-' + apt + '.pdf';

btn.addEventListener('click', () => {
  setTimeout(() => {
    alert('Download concluído ou arquivo aberto!');
  }, 500);
});
