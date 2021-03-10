$('#start_date').flatpickr({
  "disable": [
    date => {
      return (date.getDay() === 0 || date.getDay() === 6)  // disable weekends
    }
  ]
})