<!-- Credits to Scott Galloway: https://codepen.io/scottloway/pen/zqoLyQ -->

<script>
    export let spinnerIsSpinning = false;
</script>

<div class="circle-loader {spinnerIsSpinning ? '' : 'load-complete'}">
    <div class="draw {spinnerIsSpinning ? '':'checkmark'}" />
</div>

<style>
    .circle-loader {
        margin: 0.25em;
        /* margin-bottom: 3.5em; */
        border: 0.20em solid rgba(0, 0, 0, 0.165);
        border-left-color: rgb(var(--color-themeAccent));
        animation: loader-spin 1.2s infinite linear;
        position: relative;
        display: grid;
        place-items: center;
        vertical-align: top;
        border-radius: 50%;
        aspect-ratio: 1/1;
        width: 20rem;
        flex-shrink: 0;
    }   

    .load-complete {
        -webkit-animation: none;
        animation: none;
        border-color: rgb(var(--color-themeAccent));
        transition: border 500ms ease-out;
    }

    .checkmark {
        /* display: none; */
    }
    .checkmark.draw:after {
        animation-duration: 800ms;
        animation-timing-function: ease;
        animation-name: checkmark;
        transform: scaleX(-1) rotate(135deg);
    }
    .checkmark:after {
        opacity: 1;
        height: 50%;
        width: 25%;
        transform-origin: left top;
        border-right: 0.35em solid rgb(var(--color-themeAccent));
        border-top: 0.35em solid rgb(var(--color-themeAccent));
        content: "";
        left: 50%;
        top: 50%;
        translate: -100%;

        position: absolute;
    }

    @keyframes loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes checkmark {
        0% {
            height: 0;
            width: 0;
            opacity: 1;
        }
        20% {
            height: 0;
            width: 25%;
            opacity: 1;
        }
        40% {
            height: 50%;
            width: 25%;
            opacity: 1;
        }
        100% {
            height: 50%;
            width: 25%;
            opacity: 1;
        }
    }
</style>
