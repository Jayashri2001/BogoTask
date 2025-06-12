 const totals = {
      1: "$10.00 USD",
      2: "$18.00 USD",
      3: "$24.00 USD"
    };

    function selectOffer(id) {
      document.querySelectorAll('.offer-box').forEach(box => box.classList.remove('selected'));
      document.querySelectorAll('.options').forEach(opt => opt.style.display = 'none');
      document.getElementById('offer' + id).checked = true;
      document.getElementById('offerBox' + id).classList.add('selected');

      if (id === 2) {
        document.getElementById('options2').style.display = 'block';
      }

      document.getElementById('total').innerText = "Total : " + totals[id];
    }

    // Default selection on load
    selectOffer(2);