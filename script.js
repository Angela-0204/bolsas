<script>
document.addEventListener("DOMContentLoaded", function () {
    const testimonies = document.querySelectorAll(".testimony__body");
    let currentTestimonyIndex = 0;

    document.getElementById("before").addEventListener("click", function () {
        testimonies[currentTestimonyIndex].classList.remove("testimony__body--show");
        currentTestimonyIndex = (currentTestimonyIndex === 0) ? testimonies.length - 1 : currentTestimonyIndex - 1;
        testimonies[currentTestimonyIndex].classList.add("testimony__body--show");
    });

    document.getElementById("next").addEventListener("click", function () {
        testimonies[currentTestimonyIndex].classList.remove("testimony__body--show");
        currentTestimonyIndex = (currentTestimonyIndex === testimonies.length - 1) ? 0 : currentTestimonyIndex + 1;
        testimonies[currentTestimonyIndex].classList.add("testimony__body--show");
    });
});
</script>
