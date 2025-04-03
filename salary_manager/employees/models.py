from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=12, decimal_places=0)
    bonuses = models.JSONField(default=list)

    def get_total_salary(self):
        return self.salary + sum(self.bonuses)
    
    def get_highest_bonus(self):
        return max(self.bonuses)
    
    

# pass 1