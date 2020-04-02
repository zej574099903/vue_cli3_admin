<template>
    <div class="result-main">
        <div class="fail-result">
            <div class="result-img">
                <img
                    src="static/img/failImg/404.jpg"
                    style="height:100%;widht:100%;"
                />
            </div>
            <div class="result-title">404</div>
            <div class="result-subtitle">当前页面不存在</div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style>
.result-main {
    min-height: 544px;
    margin: 24px;
    text-align: center;
}
.fail-result {
    padding: 48px 32px;
}
.result-img {
    width: 250px;
    height: 295px;
    margin: auto;
}
.result-title {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    line-height: 2;
    text-align: center;
}
.result-subtitle {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 2;
    text-align: center;
}
.bottom-subcontent{
    width: 600px;
    max-height: 220px;
    overflow-y: auto;
    text-align: center;
    margin: auto
}
</style>