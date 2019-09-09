const FIRE_DOOR_1F = "data:image/png;base64,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"

const FIRE_DOOR_3F = "data:image/png;base64,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"

const FIRE_DOOR_4F = "data:image/png;base64,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"

const QR_CODE_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAIVBMVEVHcEyhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaFCxxIqAAAACnRSTlMAuNCI6KSQWTDI1pyANwAAAyJJREFUeNrt2zFKQ0EQgOE1hpdWbyDBKlUglV2QIGJlI0Iqi9xAxBMI9naWITZ7Si8wT1jYZTH5/np4DN9rd1Lu0EUKO+uxSwIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAUwL4WtXooQbAocoqN4UAy1SjRQ2AfZVVBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAow2YTd9QDYxbtcNQWYxtM/PQC28fgaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIoBhqew5x4Ab/EuL00BCmsKUBYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMg5385rlGsA5CqrXBcCNK0QoGkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4UoDLDo28xT/vsUuSJEmSJEmSJEmSJEmSJEmSJB1jR/dc/jH++GzsufzRHUys448PJ3MxAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgL8Abuc16gFw/xn2UQiwrPIWf9EBoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJDS8BT23BLg8B733QNgGk//tATYj3x8CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1ACabsLseALtNjf7BvcA+NQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATgngUOUtem4J8LoKG/l1s3h6lXKHmh5MrOPpofBgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+NcAvPxc9isNZ638AAAAASUVORK5CYII="

module.exports = {
  FIRE_DOOR_1F,
  FIRE_DOOR_3F,
  FIRE_DOOR_4F,
  QR_CODE_ICON
}