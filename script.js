document.getElementById('btnCompartilhar').addEventListener('click', () => {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Confira esta página!',
      url: window.location.href
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado para a área de transferência!');
  }
});
