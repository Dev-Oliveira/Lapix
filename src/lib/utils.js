module.exports = {
    
	age(timestamp){
            
            const today = new Date()
			const birthDate = new Date(timestamp)
	
			//2019 - 1984 = 35
			let age	= today.getFullYear() - birthDate.getFullYear()
			const month = today.getMonth() - birthDate.getMonth()

			if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()){
				age = age - 1
			}
			return age
    },
    
    graduation(school){
            

        if (school == 'EMC'){
            school = 'Ensino Médio Completo'
        }
        if(school == 'ESC'){
            school = 'Ensino Superio Completo'
        }
        if(school == 'MES'){
            school = 'Mestre'
        }
        if(school == 'Dr'){
             school = 'Doutor'
        }
        return school
    },
    grade(school){
            

        if (school == 'ano5'){
            school = '5° Ano do Ensino fundamental'
        }
        if(school == 'ano6'){
            school = '5° Ano do Ensino fundamental'
        }
        if(school == 'ano7'){
            school = '7° Ano do Ensino fundamental'
        }
        if(school == 'ano8'){
             school = '8° Ano do Ensino fundamental'
        }
        if(school == 'ano9'){
            school = '9° Ano do Ensino fundamental'
       }
       if(school == 'medio1'){
            school = '1° Ano do Ensino Médio'
        }
        if(school == 'medio2'){
            school = '2° Ano do Ensino Médio'
        }
        if(school == 'medio3'){
            school = '3° Ano do Ensino Médio'
        }
        return school
    },
    date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
		const month = `0${date.getUTCMonth() + 1}`.slice(-2)
		const day = `0${date.getUTCDate()}`.slice(-2)

        //return yyyy-mm-dd
        console.log(`${year}-${month}-${day}`)
        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay:`${day}/${month}`,
            format: `${day}/${month}/${year}`
        }
    }
}