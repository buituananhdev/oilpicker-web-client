<template>
    <div 
        class="w-full h-[60px] flex justity-between items-center py-2 px-4" 
        :class=" { 'bg-[#dfe0eb;]' : itemIndex % 2  }"
    >
        <div class="w-full cursor-pointer text-center flex justify-between items-center  ">
            <p class="w-1/12">
                {{ itemIndex }}
            </p>
            <p class="w-2/12">
                {{ itemProp.date }}
            </p>
            <p  class="w-2/12 ">
                {{ itemProp.driverName }}
            </p>
            <p class="w-2/12">
                {{ itemProp.price }} VNĐ
            </p>
            <p class="w-2/12">
                {{ itemProp.quantity }} lít
            </p>
            <p class="w-2/12">
                {{ itemProp.total }} VNĐ
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: [ 'itemIndex', 'itemProp' ]
}
</script>