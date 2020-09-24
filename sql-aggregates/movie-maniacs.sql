  select "customers"."firstName",
         "customers"."lastName",
         sum("payments"."amount") as "totalPayment"
    from "payments"
    join "customers" using ("customerId")
group by "customerId"
order by "totalPayment" desc;
