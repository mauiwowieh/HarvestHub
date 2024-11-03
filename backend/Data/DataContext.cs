using System;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
}
