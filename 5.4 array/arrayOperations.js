styles = ['Jazz', 'Blues'];
styles.push('Rock-n-roll');

styles[Math.floor(styles.length - 1)/2] = 'Classic';
console.log(styles.shift());
styles.unshift('Rap', 'Reggae');