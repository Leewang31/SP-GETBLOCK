<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref } from 'vue';
type SelectPropType = string | number | boolean | Date | undefined;
export interface ISelectOption {
	value: string;
	valueLabel: string;
	listLabel: string;
	uuid?: string;
}

export default defineComponent({
	name: 'ApocSelect',
	props: {
		optionList: {
			type: Array as PropType<ISelectOption[]>,
			required: true,
		},
		selectedValue: {
			type: Object as PropType<ISelectOption>,
			required: false,
		},
		onChange: {
			type: Function as PropType<(data: SelectPropType) => void>,
			required: false,
		},
		placeholder: {
			type: String as PropType<string>,
			required: false,
		},
		disabled: {
			type: Boolean as PropType<boolean>,
			required: false,
		},
		exceptPlaceholderFromList: {
			type: Boolean as PropType<boolean>,
			required: false,
		},
	},
	setup(props) {
		const optionList = computed(() => props.optionList || []);
		const listOpened = ref<boolean>(false);

		const handleSelect = (v?: ISelectOption) => {
			if (props.disabled) return;
			if (props.onChange) props.onChange(v?.value || undefined);
			listOpened.value = false;
		};

		const clickSelectBox = () => {
			if (props.disabled) return;
			listOpened.value = !listOpened.value;
		};

		const closeOptionList = () => {
			listOpened.value = false;
		};

		return {
			handleSelect,
			listOpened,
			clickSelectBox,
			closeOptionList,
		};
	},
});
</script>

<template>
	<div class="apoc-select">
		<div
			class="selected-area"
			:class="{ placeholder: placeholder && !selectedValue }"
			@click="clickSelectBox"
			v-html="selectedValue?.valueLabel || placeholder || ''"></div>
		<i class="select-arrow-down" />
		<div v-if="listOpened" class="option-list-area-wrapper">
			<ul class="option-list-area" v-click-away="closeOptionList">
				<li v-if="!exceptPlaceholderFromList && placeholder" class="placeholder" :value="undefined" @click="() => handleSelect()">
					{{ placeholder }}
				</li>
				<li v-for="option of optionList" :value="option.value" :key="option.value" v-html="option.listLabel" @click="handleSelect(option)"></li>
			</ul>
		</div>
	</div>
</template>

<style></style>
