const grades: number[] = [16,12,16,7,17,14,9,8,18,12];

let fails: number = 0;
let total: number = 0;

for (let grade of grades){
	if(grade < 10){
		fails++;
	}
	total += grade;
}
console.log(`Fails: ${fails}`);
console.log(`Average: ${total/grades.length}`);
console.log(`Percentage: ${total/200*100} %`);
