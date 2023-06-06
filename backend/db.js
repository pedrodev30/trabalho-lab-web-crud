import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pedro_henrique_developer_full_stack_142830",
  database: "trabalho_lab_web_crud"
})