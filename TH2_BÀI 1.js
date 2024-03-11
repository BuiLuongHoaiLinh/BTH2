<script type="bài 1">

Mã lệnh JavaScript;

</script>
const form = document.querySelector('form');
const heSoAInput = document.querySelector('#heso-a');
const heSoBInput = document.querySelector('#heso-b');
const ketQuaElement = document.querySelector('#ket-qua');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const heSoA = parseFloat(heSoAInput.value);
    const heSoB = parseFloat(heSoBInput.value);

    const nghiemX = -heSoB / heSoA;

    ketQuaElement.innerHTML = `
        <h2>KẾT QUẢ</h2>
        <p>Nghiệm x = ${nghiemX}</p>
    `;
});
