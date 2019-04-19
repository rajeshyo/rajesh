using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.IO;
using System.Data.Sql;
using System.Data;


namespace CURDAJAX.Models
{
    public class ModelEmployeeDB
    {
        SqlConnection con;
        private void connection() {

            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
            con = new SqlConnection(cs);
        }
      

        public bool Add(ModelEmployee emp)
        {
            int i;
            connection();
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.Connection = con;
                cmd.CommandText = "InsertUpdateEmployee";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", emp.EmployeeID);
                cmd.Parameters.AddWithValue("@Name", emp.Name);
                cmd.Parameters.AddWithValue("@Age", emp.Age);
                cmd.Parameters.AddWithValue("@State", emp.State);
                cmd.Parameters.AddWithValue("@Country", emp.Country);
                cmd.Parameters.AddWithValue("@Action", "Insert");
                con.Open();
                i = cmd.ExecuteNonQuery();
                con.Close();
                if (i > 0)
                {
                    return true;
                }
                else {
                    return false;
                }
                
            }
           
            
        }




        public List<ModelEmployee> ListAll()
        {
            connection();
            List<ModelEmployee> lst = new List<ModelEmployee>();
            using (SqlCommand cmd = new SqlCommand())
            {
                cmd.Connection = con;
                cmd.CommandText = "SelectEmployee";
                cmd.CommandType = CommandType.StoredProcedure;
                con.Open();
                
                SqlDataReader rdr = cmd.ExecuteReader();
                while (rdr.Read())
                {
                    lst.Add(new ModelEmployee
                    {
                        EmployeeID = Convert.ToInt32(rdr["EmployeeId"]),
                        Name = rdr["Name"].ToString(),
                        Age = Convert.ToInt32(rdr["Age"]),
                        State = rdr["State"].ToString(),
                        Country = rdr["Country"].ToString(),
                    });
                }
                return lst;
            }
        }

    }
}