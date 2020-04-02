<template>
    <div class="result-main">
        <div class="fail-result">
            <div class="result-img">
                <img
                    :src="'static/img/failImg/'+reason.failTitle+'.jpg'"
                    style="height:100%;widht:100%;"
                />
            </div>
            <div class="result-title">{{reason.failTitle}}</div>
            <div class="result-subtitle">{{reason.failContent}}</div>
            <a-button type="primary" @click="toBack">返回上一页</a-button>
            <a-button @click="isShowWarning=!isShowWarning" type="test">查看详情</a-button>
            <div class="bottom-subcontent" v-if="isShowWarning" style="font-weight:bold;border-bottom: 1px solid gray"><span style="color: red">PATH: </span>{{reason.path}}</div>
            <div class="bottom-subcontent" v-if="isShowWarning&&reason.failTitle=='500'"><span style="color: red;font-weight:bold;">MESSAGE: </span>{{reason.warnMsg}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "failReason",
    created() {
        this.reason = this.$route.params.reason;
    },
    data() {
        return {
            reason: "",
            isShowWarning:false
        };
    },
    methods: {
        toBack() {
            this.$router.go(-1);
        }
    }
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
    text-align: left;
    margin: auto;
    margin-top: 10px;
}
</style>
