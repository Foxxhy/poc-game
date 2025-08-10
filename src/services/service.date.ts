import { IConfigDayPeriod, IConfigDay } from "@/types";

export const ServiceDate = {
    getDate: (date: Date = new Date()): string => {
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${month}/${year}`;
    },
    getHour: (duration: number) => {
        const now = Date.now();
        const dayDurationMs = duration * 60 * 1000;
        const timeInDay = now % dayDurationMs;
        const ratio = timeInDay / dayDurationMs;

        const virtualTotalMinutes = ratio * 24 * 60;
        const hours = Math.floor(virtualTotalMinutes / 60);
        const minutes = Math.floor(virtualTotalMinutes % 60);
      
        const pad = (n: number) => String(n).padStart(2, "0");
      
        return `${pad(hours)}:${pad(minutes)}`;
    },
    getPeriod: (duration: number, period: IConfigDayPeriod[]) => {
        const now = Date.now();
        const dayDurationMs = duration * 60 * 1000;
        const timeInDay = now % dayDurationMs;
        const ratio = timeInDay / dayDurationMs;
    
        const totalWeight = period.reduce((sum, p) => sum + p.weight, 0);
    
        let cumulative = 0;
        for (const time of period) {
          const start = cumulative / totalWeight;
          cumulative += time.weight;
          const end = cumulative / totalWeight;
    
          if (ratio >= start && ratio < end) {
            return time.label;
          }
        }
    
        return period[period.length - 1].label;
    },
    getDay: (duration: number, days: IConfigDay): string => {
        const now = Date.now();
        const dayDurationMs = duration * 60 * 1000;
    
        const daysPassed = Math.floor(now / dayDurationMs);
        
        const dayIndex = daysPassed % days.days.length;
    
        return days.days[dayIndex];
    }
}