document.addEventListener('DOMContentLoaded', function() {
    const historyBtn = document.getElementById('donation-button');
    const donationBtn = document.getElementById('history-button');
  
    function resetButtons() {
      historyBtn.classList.remove('bg-[#B4F461]');
      historyBtn.classList.add('bg-gray-200');
      donationBtn.classList.remove('bg-[#B4F461]');
      donationBtn.classList.add('bg-gray-200');
    }
  
    historyBtn.addEventListener('click', function() {
      resetButtons();
      historyBtn.classList.remove('bg-gray-200');
      historyBtn.classList.add('bg-[#B4F461]');
    });
  
    donationBtn.addEventListener('click', function() {
      resetButtons();
      donationBtn.classList.remove('bg-gray-200');
      donationBtn.classList.add('bg-[#B4F461]');
    });
  });
  