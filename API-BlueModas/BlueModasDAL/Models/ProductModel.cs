namespace BlueModasDAL
{
    public class ProductModel
    {
        #region Properties

        public int Id { get; set; }

        public string Name { get; set; }

        public double Price { get; set; }

        public int Inventory { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }

        public bool Status { get; set; }

        #endregion
    }
}
