using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_SQL.Models
{
    public class Produto
    {
        public long Id { get; set; }
        public string Nome { get; set; }
        public decimal Valor { get; set; }
    }
}
