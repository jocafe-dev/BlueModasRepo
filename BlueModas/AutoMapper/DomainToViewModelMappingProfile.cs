using AutoMapper;
using BlueModasDAL;
using BlueModasDTO.ResponseDTO;
using DTO;

namespace BlueModasAPI.AutoMapper
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public DomainToViewModelMappingProfile()
        {
            CreateMap<ProductModel, ProductRequestDTO>().ReverseMap();
            CreateMap<ProductModel, ProductResponseViewModel>().ReverseMap();
            CreateMap<ProductRequestDTO, ProductResponseViewModel>().ReverseMap();

        }
    }
}
