<template>
    <div>
        <p>{{ this.currentDate.getFullYear() }} 년</p>
        <p>{{ this.currentDate.getMonth() }} 월</p>
        <table>
            <thead>
                <tr>
                <th v-for="day in daysOfWeek" :key="day">{{ day }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="week in weeks" :key="week">
                <td v-for="date in week" :key="date" :class="{ 'disabled': !isCurrentMonth(date) }">
                    <a href="./"> {{ date.getDate() }} </a> 
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'CarenderView',
    data() {
        return {
            currentDate: new Date()
        };
    },
    computed: {
        daysOfWeek() {
            return ['일', '월', '화', '수', '목', '금', '토'];
        },
        weeks() {
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            const startDate = new Date(year, month, 1 - firstDay.getDay());
            const endDate = new Date(year, month, lastDay.getDate());
            const weeks = [];
            let currentDay = startDate;

            while (currentDay <= endDate) {
                const week = [];
                for (let i = 0; i < 7; i++) {
                    week.push(new Date(currentDay));
                    currentDay.setDate(currentDay.getDate() + 1);
                }
                weeks.push(week);
            }

            return weeks;
        }
    },
    methods: {
        isCurrentMonth(date) {
            const currentYear = this.currentDate.getFullYear();
            const currentMonth = this.currentDate.getMonth();
            return (
                date.getFullYear() === currentYear && date.getMonth() === currentMonth
            );
        },
        GetCurrentYear(){

        },
        GetCurrentMonthGet(){

        }
    }
};
</script>

<style>
.disabled {
    color: lightgray;
}
</style>